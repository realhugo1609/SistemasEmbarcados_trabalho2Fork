#include <Arduino.h>

/**************** MODO STATION (CONECTA A REDE WIFI) ************************/
#include <WiFi.h>
#include <WebServer.h>

#include <ESPAsyncWebServer.h>

#include "FS.h"
#include "SPIFFS.h"

#define led 2

const char* ssid = "iPhone de Mikael";  // Enter your SSID here
const char* password = "123mikael";  //Enter your Password here

AsyncWebServer server(80);

String le_temp() 
{
  float temp = random(0,1000)/10;
  return String(temp);
}
  
String le_umid() 
{
  float umid = random(0,1000)/10;
  return String(umid);
}


String processor(const String& var)
{
  if (var == "TEMP"){
    return le_temp();
  }
  else if (var == "UMID"){
    return le_umid();
  }
  return String();
}

void setup() 
{
  Serial.begin(115200);

  pinMode(led, OUTPUT);
  
  if(!SPIFFS.begin())
  {
    Serial.println("Um errro aconteceu durante a montagem da Flash");
    return;
  }

  Serial.println("Conectando......");
  WiFi.begin(ssid, password);

  
  while (WiFi.status() != WL_CONNECTED) 
  {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi conectado com sucesso");
  Serial.print("IP do ESP32 eh: ");
  Serial.println(WiFi.localIP());
  
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request)
  {
    request->send(SPIFFS, "/index.html", String(), false, processor);
  });

  server.on("/novo_estilo.css", HTTP_GET, [](AsyncWebServerRequest *request) 
  {
    request->send(SPIFFS, "/novo_estilo.css", "text/css");
  });
   
   server.on("/on", HTTP_GET, [](AsyncWebServerRequest *request){
    digitalWrite(led, HIGH);    
    request->send(SPIFFS, "/index.html", String(), false, processor);
  });
  
  server.on("/off", HTTP_GET, [](AsyncWebServerRequest *request){
    digitalWrite(led, LOW);    
    request->send(SPIFFS, "/index.html", String(), false, processor);
  });

  server.on("/temp", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", le_temp().c_str());
  });
  
  server.on("/umid", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", le_umid().c_str());
  });
  
  server.begin();
}
 
void loop()
{}
#! /bin/python3

# importing the requests library
    
# api-endpoint
#https://criptoya.com/api/lemoncash/dai/ars/0.5
#https://criptoya.com/api/bancostodos"
#https://criptoya.com/api/dolar


import requests

class criptoya():
    def __init__(self):
        self._exchange='lemoncash'
        self._coin='dai'
        self._fiat='ars'
        self._volumen='0.5'
    
    def obt_datos(self):
        URL = "https://criptoya.com/api/"+self._exchange+"/"+self._coin+"/"+self._fiat+"/"+self._volumen
        #print(URL)
        r = requests.get(url = URL)          
        data = r.json()
        return data  
    
    def obt_datos_dolar(self):
        URL2= "https://criptoya.com/api/dolar"
        #print(URL)
        r2 = requests.get(url = URL2)          
        data2 = r2.json()
        return data2
    
cripto=criptoya()
print(cripto.obt_datos_dolar())

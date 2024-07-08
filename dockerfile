# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el archivo .env al contenedor
COPY .env .env

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 5000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]
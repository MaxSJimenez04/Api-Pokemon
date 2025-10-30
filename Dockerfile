# Imagen base oficial de Node
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto donde corre tu API
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

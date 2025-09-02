# Imagen base con Node 12
FROM node:12

# Carpeta de trabajo
WORKDIR /app

# Copiar package.json y lock
COPY package*.json ./

# Instalar dependencias
RUN npm install -g @angular/cli@8.3.29 \
    && npm install && npm install @angular/router@8 --save

# Copiar el resto del proyecto (sin node_modules por el .dockerignore)
COPY . .

# Exponer puerto de Angular
EXPOSE 4200

# Comando por defecto
CMD ["npm", "start"]

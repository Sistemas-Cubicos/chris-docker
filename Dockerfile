# Usa una versión de Node compatible con Angular 8.
# La etiqueta "-alpine" es una versión más ligera de la imagen.
FROM node:12-alpine

# Establece la carpeta de trabajo dentro del contenedor.
WORKDIR /app

# Copia primero el package.json y package-lock.json.
# Esto aprovecha el caché de Docker para no reinstalar dependencias si no cambian.
COPY package*.json ./

# Instala las dependencias definidas en package.json.
# Se asume que @angular/cli y @angular/router ya están en tu package.json.
# Si no lo están, es mejor añadirlos en tu máquina local y luego reconstruir.
RUN npm install

# Ahora, copia el resto de los archivos de tu proyecto.
COPY . .

# Expone el puerto 4200 para que podamos acceder a él desde fuera del contenedor.
EXPOSE 4200

# El comando para iniciar la aplicación.
# Se usa "--host 0.0.0.0" para que el servidor de Angular
# sea accesible desde fuera del contenedor. Sin esto, solo funcionaría "dentro" de Docker.
CMD ["npm", "start"]
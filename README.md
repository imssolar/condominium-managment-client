# Condominium Management System - Frontend

Sistema de gestión para condominios desarrollado con Angular 20, enfocado en la administración de paquetes de conserjería y control de acceso al gimnasio.

## Tecnologías

- **Framework:** Angular 20
- **Lenguaje:** TypeScript 5.x
- **Estilos:** CSS / SCSS
- **HTTP Client:** HttpClient (Angular)
- **Formularios:** Reactive Forms

## Requisitos Previos

- Node.js 18+ 
- npm 9+
- Angular CLI 20

## Instalación
```bash
# Clonar repositorio
git clone https://github.com/TU-USUARIO/condominium-frontend.git

# Instalar dependencias
cd condominium-frontend
npm install

# Ejecutar en desarrollo
ng serve
La aplicación estará disponible en http://localhost:4200
Backend
Este frontend consume la API REST desarrollada en Spring Boot.
Repositorio backend: [https://github.com/imssolar/condominium-management-api]
URL API (desarrollo): http://localhost:8080/api
Estructura del Proyecto
src/
├── app/
│   ├── components/        # Componentes UI
│   ├── services/          # Servicios HTTP
│   ├── models/            # Interfaces TypeScript
│   ├── guards/            # Guards de autenticación (pendiente)
│   └── pipes/             # Pipes personalizados
├── assets/                # Recursos estáticos
└── environments/          # Configuración por ambiente
Funcionalidades Implementadas

 Autenticación (Login/Register)
 Dashboard principal
 Gestión de paquetes

 Registrar llegada de paquetes
 Listar paquetes pendientes
 Actualizar estado de entrega
 Buscar por departamento


 Control de gimnasio (pendiente)

Estado del Proyecto
En desarrollo activo - Fase de integración frontend-backend
Última actualización: [Lunes 29 sep]
Autor
[Iván Montecinos Solar]
Proyecto de aprendizaje: Sistema full-stack con fines educativos
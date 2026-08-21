# Clínica Integral V17 SaaS

MVP responsive con frontend React/Vinext, API Node.js/Express, autenticación por roles y PostgreSQL central.

## Novedades V7

- Recepción del día: llegadas, espera, consulta, atención, ausencias y cobro del turno.
- Caja diaria: apertura, fondo inicial, ingresos, egresos, medios de pago y cierre con diferencia.
- Cuentas corrientes: cargos, pagos parciales, vencimientos, saldos e historial por paciente.
- Menú lateral adaptable a pantallas de poca altura, con desplazamiento interno.
- Inicio de sesión limpio, sin usuarios ni contraseñas visibles o precargados.

## Novedades V8

- Módulo opcional de Socios, habilitable únicamente por un Administrador.
- Titular vinculado a un paciente, con modalidad individual o grupo familiar.
- Integrantes familiares vinculados a sus respectivas fichas de pacientes.
- Cuota configurable, vigencia, estado, descuento y registro de pagos.
- Aviso en Recepción: socio al día habilitado para descuento o cuota pendiente sin beneficio.
- Cobros de cuotas registrados automáticamente como ingresos financieros.
- Al deshabilitar el módulo, los datos se conservan y se oculta el acceso a Recepción.

## Novedades V9

- Los socios se registran de manera independiente, aunque nunca hayan sido pacientes.
- La vinculación con una ficha de paciente existente es opcional.
- Alta de titulares mediante formulario completo, sin cuadros de entrada del navegador.
- Alta de integrantes familiares mediante formulario con datos personales y vínculo.
- Eliminación individual de integrantes del grupo familiar.
- Registro de cuotas mediante formulario propio.
- Compatibilidad con los registros de Socios creados en la V8.

## Novedades V10

- Edición del valor mensual después de crear un socio o grupo familiar.
- Edición del porcentaje de descuento aplicado en Recepción.
- Cambio posterior entre modalidad Individual y Grupo familiar.
- Los cambios conservan integrantes, pagos registrados y vigencia existente.

## Novedades V11

- Buscador de pacientes por nombre, DNI o teléfono al generar un turno.
- Prevención de turnos superpuestos para un mismo profesional, considerando duración.
- Validación adicional de conflictos en el backend.
- Configuración de días laborales mediante casillas y rango horario por cada día.
- Validación de turnos contra la disponibilidad configurada del profesional.
- Vista semanal de Profesionales con disponibilidad y turnos asignados.

## Novedades V12

- Formulario de cobro en Recepción con importe y medio de pago.
- Aplicación opcional del descuento sugerido para socios al día.
- Arquitectura multi-clínica para operar como SaaS.
- Separación de pacientes, profesionales, turnos, historias, finanzas, caja, socios y configuración por clínica.
- Usuarios y auditoría asociados a su clínica.
- Acceso mediante código de clínica, correo y contraseña.
- Alta segura de nuevas clínicas mediante una API privada de plataforma.

## Novedades V13

- Panel visual del propietario en `/platform`.
- Autenticación separada para el propietario SaaS.
- Métricas globales de clínicas, usuarios, pacientes y turnos.
- Alta de clínicas con administrador inicial desde un formulario.
- Planes MVP, Profesional y Premium.
- Suspensión y reactivación de organizaciones sin eliminar sus datos.
- Modificación del nombre comercial y plan contratado.
- El propietario no obtiene acceso automático a información clínica.

### Corrección V13.1

- Ruta real `/platform` para acceso directo y recarga sin error 404.

## Novedades V14

- Administración contractual completa desde el panel del propietario.
- Fechas de inicio y finalización de contrato.
- Estado de facturación: Al día, Pendiente o Vencida.
- Notas contractuales por clínica.
- Buscador global de organizaciones.
- Feature flag de Socios administrado exclusivamente por el propietario SaaS.
- El Administrador de una clínica ya no puede habilitar ni deshabilitar módulos contratados.
- Visualización de módulos incluidos directamente en el listado de clínicas.
- Los cambios de módulos se aplican por tenant sin afectar otras organizaciones.

## Novedades V15

- Menú lateral del panel propietario completamente navegable: Resumen, Organizaciones, Contratos y Actividad.
- Gestión independiente de consultorios por clínica, con nombre, ubicación y estado.
- Asignación de consultorio por cada día y rango horario de trabajo del profesional.
- Consultorio visible en la agenda semanal del equipo médico.
- Prevención de ocupaciones superpuestas del mismo consultorio, tanto en frontend como en backend.
- Datos de consultorios aislados por clínica y persistidos en PostgreSQL.
- Estructura preparada para incorporar posteriormente el turnero público por pantalla.

## Novedades V16

- Turnero público responsive por clínica en `/reservar?clinica=CODIGO`.
- Selección de profesional, día y horarios disponibles calculados desde su agenda real.
- Alta o actualización del paciente y creación del turno dentro del tenant correspondiente.
- Prevención transaccional de dobles reservas concurrentes.
- Recordatorios automáticos por WhatsApp mediante plantillas de Meta Cloud API.
- Registro de mensajes enviados, errores o configuración pendiente sin simular entregas.
- Ejecución automática cada cinco minutos y procesamiento manual desde Turnos.
- Turnero público y WhatsApp administrados como módulos contractuales independientes.
- Pantalla de acceso renovada con beneficios funcionales en lugar de detalles técnicos internos.

## WhatsApp

Para realizar envíos reales, completar en `.env` las variables `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID` y el nombre de una plantilla aprobada. Si no se configuran, el sistema registra los recordatorios con estado `Configuración pendiente`.

## Novedades V17

- Página pública de planes en `/planes`, accesible directamente desde el login.
- Precios mensuales configurables por el propietario para MVP, Profesional y Premium.
- Alta autogestionada de clínicas con administrador inicial y 14 días de período inicial.
- Checkout de Mercado Pago opcional después del registro.
- Webhook para acreditar automáticamente la facturación cuando el pago queda aprobado.
- Configuración de Mercado Pago desde `Plataforma → Pagos y planes`.
- Access Token cifrado con AES-256-GCM y utilizado únicamente por el backend.
- Saludo general corregido a `Buena jornada` para todos los usuarios.
- Gateway publicado directamente en el puerto 80 para trabajar detrás de Cloudflare.

## Mercado Pago y dominio público

Ingresar la Public Key y el Access Token desde el panel del propietario. El Access Token no vuelve a mostrarse después de guardarlo.

Configurar en `.env` la URL pública utilizada para retornos y webhooks:

    PUBLIC_APP_URL=https://clinica.tu-dominio.com

En Cloudflare, mantener el proxy activo y apuntar el registro DNS a la IP del servidor. El gateway Docker escucha en el puerto 80.

## Propietario de la plataforma

Configurar credenciales privadas antes del primer inicio:

    PLATFORM_ADMIN_NAME=Propietario SaaS
    PLATFORM_ADMIN_EMAIL=propietario@tu-dominio.com
    PLATFORM_ADMIN_PASSWORD=una_contraseña_larga_y_unica

Ingresar desde `http://localhost:3000/platform` o desde el enlace ubicado debajo del formulario de acceso clínico.

## Acceso inicial

El código de la primera organización se configura con `CLINIC_SLUG` y por defecto es `clinica-integral`.

## Alta de una clínica SaaS

Definir una clave segura en `PLATFORM_API_KEY` y ejecutar desde un entorno administrativo:

    curl -X POST http://localhost:3000/api/platform/clinics \
      -H "Content-Type: application/json" \
      -H "x-platform-key: REEMPLAZAR_CLAVE" \
      -d '{"name":"Clínica Central","slug":"clinica-central","adminName":"Administrador","adminEmail":"admin@central.com","adminPassword":"Cambiar123!"}'

La nueva clínica se crea sin pacientes ni datos de demostración y obtiene un espacio de datos independiente.

## Arquitectura

- gateway: Nginx expone la aplicación en el puerto 3000.
- frontend: interfaz responsive.
- api: autenticación, autorización, auditoría y persistencia.
- db: PostgreSQL 17 con volumen persistente.

## Inicio rápido

    cp .env.example .env
    docker compose up -d --build

Abrir http://localhost.

Antes de publicar, cambiar en .env POSTGRES_PASSWORD, JWT_SECRET y todas las contraseñas iniciales.

## Usuarios iniciales

| Perfil | Correo | Contraseña predeterminada |
| --- | --- | --- |
| Administrador | admin@clinica.local | Admin123! |
| Recepción | recepcion@clinica.local | Recepcion123! |
| Profesional | profesional@clinica.local | Profesional123! |

## Permisos

- Administrador: acceso total, usuarios, profesionales, finanzas, inventario y auditoría.
- Recepción: pacientes, turnos, recepción diaria, caja, cuentas corrientes y movimientos financieros.
- Profesional: pacientes, sus turnos e historias clínicas.

Los permisos se verifican en la API; ocultar módulos en la interfaz no es el único control.

## Seguridad implementada

- Contraseñas con bcrypt (12 rondas).
- Cookie de sesión HttpOnly, SameSite=Strict, vencimiento de 8 horas.
- Rate limit de intentos de acceso.
- Cabeceras de seguridad con Helmet.
- Auditoría en PostgreSQL.
- Usuarios inactivos no pueden iniciar ni mantener sesión.
- API y PostgreSQL no publican puertos al host.

Para HTTPS detrás de Cloudflare o un reverse proxy, usar COOKIE_SECURE=true.

## Backup

    docker compose exec -T db pg_dump -U clinica clinica > clinica-backup.sql

Para detener sin borrar datos:

    docker compose down

No usar docker compose down -v salvo que se quiera eliminar definitivamente la base.

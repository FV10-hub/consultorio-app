-- CreateTable
CREATE TABLE "Persona" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre_completo" TEXT,
    "documento" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "esDoctor" BOOLEAN NOT NULL DEFAULT false,
    "esUsuario" BOOLEAN NOT NULL DEFAULT false,
    "esPaciente" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialidades" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT,
    "codigo" TEXT,

    CONSTRAINT "Especialidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ficha" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hora_consulta" TEXT,
    "observacion" TEXT,
    "indicacion" TEXT,
    "receta" TEXT,
    "asistio" BOOLEAN NOT NULL DEFAULT false,
    "personaId" INTEGER NOT NULL,

    CONSTRAINT "Ficha_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Persona_documento_key" ON "Persona"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_email_key" ON "Persona"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ficha_personaId_key" ON "Ficha"("personaId");

-- AddForeignKey
ALTER TABLE "Ficha" ADD CONSTRAINT "Ficha_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

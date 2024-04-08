export default async function PersonaForm() {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="nombre_completo"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre Completo
        </label>
        <input
          type="text"
          id="nombre_completo"
          name="nombre_completo"
          className="block w-full p-3 bg-slate-100"
          placeholder="Nombre Completo"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="documento"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Documento
        </label>
        <input
          type="text"
          id="documento"
          name="documento"
          className="block w-full p-3 bg-slate-100"
          placeholder="Documento"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="block w-full p-3 bg-slate-100"
          placeholder="Correo"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="esDoctor"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Es Doctor?
        </label>
        <input
          type="checkbox"
          id="esDoctor"
          name="esDoctor"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="esPaciente"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Es Paciente?
        </label>
        <input
          type="checkbox"
          id="esPaciente"
          name="esPaciente"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
    </>
  );
}

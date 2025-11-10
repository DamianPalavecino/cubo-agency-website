import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center space-y-4">
        <p className="text-sm uppercase tracking-widest text-cyan">Error 404</p>
        <h1 className="text-4xl font-bold text-dark">Página no encontrada</h1>
        <p className="text-gray-600">
          La ruta solicitada no existe. Volvé al inicio para seguir explorando.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-cyan px-6 py-3 font-semibold text-white transition hover:bg-opacity-90"
        >
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}

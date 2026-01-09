import Link from "next/link";

export default function AdminPanelPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">Panel</p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight mt-2">Manejo de clientes</h1>
              <div className="decor-line" aria-hidden />
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
                Panel en construcción. Aquí vamos a centralizar: registro de clientes, historial de sesiones y seguimiento.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-full bg-white/85 px-5 py-2 text-sm font-semibold text-[#b14ccf] border border-white/60"
              >
                Volver al login
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white/85 px-5 py-2 text-sm font-semibold text-[#b14ccf] border border-white/60"
              >
                Inicio
              </Link>
            </div>
          </div>

          <div className="mt-10 soft-gradient-border">
            <div className="soft-gradient-border__inner card-sheen rounded-3xl p-7 sm:p-10 relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-40 bg-gradient-to-br from-white/60 via-transparent to-white/30"
                aria-hidden
              />

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Módulos</h2>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Por ahora son secciones de diseño. Luego conectamos base de datos y funcionalidades.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Módulo</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Clientes</p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">Alta de clientes, datos básicos y notas.</p>
                    <p className="mt-3 text-xs font-semibold text-[#b14ccf]">Próximamente</p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Módulo</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Historial</p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">Sesiones, tratamientos, pagos y evolución.</p>
                    <p className="mt-3 text-xs font-semibold text-[#b14ccf]">Próximamente</p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Módulo</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Seguimiento</p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Recordatorios, seguimiento post-tratamiento y tareas.
                    </p>
                    <p className="mt-3 text-xs font-semibold text-[#b14ccf]">Próximamente</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-gray-200 bg-white/80 p-5">
                  <p className="text-sm font-semibold text-slate-900">Acceso</p>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Este panel está abierto temporalmente mientras se implementa autenticación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

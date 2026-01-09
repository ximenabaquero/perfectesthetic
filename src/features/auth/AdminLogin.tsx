import Image from "next/image";
import Link from "next/link";

export default function AdminLogin() {
  return (
    <section id="admin" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight mb-4">Acceso Admin</h2>
          <div className="decor-line" aria-hidden />
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Acceso temporal abierto mientras diseñamos el panel de manejo de clientes.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-stretch">
          <div className="soft-gradient-border">
            <div className="soft-gradient-border__inner card-sheen rounded-3xl p-7 sm:p-10 h-full relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-50 bg-gradient-to-br from-white/70 via-transparent to-white/40"
                aria-hidden
              />

              <div className="relative">
                <div className="mb-8">
                  <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">Modo demo</p>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-2">Inicia sesión</h3>
                  <p className="text-slate-600 mt-2 leading-relaxed">
                    Por ahora no hay autenticación: puedes ingresar con cualquier correo y contraseña.
                  </p>
                </div>

                <form className="space-y-5" autoComplete="on">
                  <div className="text-left">
                    <label htmlFor="admin-email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Correo
                    </label>
                    <input
                      id="admin-email"
                      name="email"
                      type="email"
                      placeholder="tu-correo@dominio.com"
                      autoComplete="email"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-[#d7b4f3] focus:border-transparent"
                    />
                  </div>

                  <div className="text-left">
                    <label htmlFor="admin-password" className="block text-sm font-semibold text-slate-900 mb-2">
                      Contraseña
                    </label>
                    <input
                      id="admin-password"
                      name="password"
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      autoComplete="current-password"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-[#d7b4f3] focus:border-transparent"
                    />
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white/80 p-5 text-left">
                    <p className="text-sm font-semibold text-slate-900">Nota</p>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      Login temporal para diseño. El panel se enfocará en <span className="font-semibold">manejo de clientes</span>
                      (registro, historial y seguimiento).
                    </p>
                  </div>

                  <Link
                    href="/admin/panel"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#b14ccf] px-5 py-3 font-semibold text-white shadow-md shadow-purple-200/50 transition-all hover:brightness-95 hover:shadow-lg active:translate-y-[1px]"
                  >
                    Ingresar
                  </Link>
                </form>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="group soft-gradient-border">
              <div className="soft-gradient-border__inner card-sheen relative w-full overflow-hidden rounded-3xl aspect-[16/10]">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10"
                  aria-hidden
                />
                <Image
                  src="/adel.jpeg"
                  alt="Imagen del panel administrativo"
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">Perfestetic</p>
              <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">Panel administrativo</h3>
              <p className="mt-2 text-slate-600">Enfocado en clientes, seguimiento y registros.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

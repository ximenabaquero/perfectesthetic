import Image from "next/image";

export default function Admin() {
  return (
    <section id="admin" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Admin</h2>
          <div className="decor-line" aria-hidden />
        </div>

        <div className="mt-10 mx-auto max-w-5xl grid gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-lg shadow-gray-200/60">
            <form className="space-y-5" autoComplete="on">
              <div className="text-left">
                <label htmlFor="admin-email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Correo
                </label>
                <input
                  id="admin-email"
                  name="email"
                  type="email"
                  placeholder="Ingresa tu correo"
                  autoComplete="email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm outline-none focus:ring-2 focus:ring-[#d7b4f3]"
                />
              </div>

              <div className="text-left">
                <label htmlFor="admin-password" className="block text-sm font-semibold text-gray-800 mb-2">
                  Contraseña
                </label>
                <input
                  id="admin-password"
                  name="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm outline-none focus:ring-2 focus:ring-[#d7b4f3]"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-[#b14ccf] px-5 py-3 font-semibold text-white shadow-md transition-transform hover:scale-[1.01]"
              >
                Ingresar
              </button>
            </form>
          </div>

          <div className="text-center">
            <div className="group">
              <div className="relative w-full">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-6 -left-6 z-20 select-none text-3xl text-[#b14ccf]/70"
                >
                  ✿
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-7 -right-4 z-20 select-none text-2xl text-[#b14ccf]/70"
                >
                  ❀
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-6 -left-5 z-20 select-none text-2xl text-[#b14ccf]/70"
                >
                  ❀
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-7 -right-6 z-20 select-none text-3xl text-[#b14ccf]/70"
                >
                  ✿
                </span>

                <div className="card-sheen relative w-full overflow-hidden rounded-3xl aspect-[16/10]">
                  <Image
                    src="/adel.jpeg"
                    alt="Adel"
                    fill
                    sizes="(min-width: 1024px) 520px, 90vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <h3 className="font-bombshell mt-5 text-2xl font-medium tracking-[0.14em] text-[#b14ccf]">
              Bienvenida Adel
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

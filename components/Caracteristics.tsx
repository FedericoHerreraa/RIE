

export const Caracteristics = () => {
    return (
        <section className="py-20 text-center min-h-[100vh] bg-zinc-100">
            <div className="mb-40">
                <h1 className="text-5xl font-extralight mb-5 text-zinc-700">Descubri nuestras funcionalidades</h1>
                <p className="text-zinc-400">Tu institucion sera completamente distinta con <span className="font-bold text-zinc-500">RIE</span></p>
            </div>

            <section>
                {info.map((item, index) => (
                    <div key={index} className={`flex ${index%2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-10 mb-40 items-center justify-around mt-10 w-[80%] mx-auto`}>
                        <div className={`w-1/2  ${index%2 === 0 ? 'text-start' : 'text-end'}`}>
                            <h2 className="text-3xl font-extralight mb-5 text-zinc-700">{item.title}</h2>
                            <p className="text-zinc-500">{item.description}</p>
                        </div>
                        <div className="w-1/2">
                            <div className=" bg-zinc-300 w-full h-48">
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}


const info = [
    {
        title: 'Sección Corporativa',
        description: 'Permite mostrar la identidad de la institución con imágenes, descripciones y contenido visual atractivo. Incluye un apartado de contacto con formularios personalizables y mapas interactivos para ubicar la sede fácilmente.'
    },
    {
        title: 'Noticias y Actividades',
        description: 'Ofrece un espacio dinámico para compartir las novedades más relevantes de la institución, como actividades del mes, eventos especiales y anuncios importantes, manteniendo a la comunidad siempre informada.'
    },
    {
        title: 'Documentación Descargable',
        description: 'Brinda acceso rápido a materiales importantes como formularios de inscripción, reglamentos internos, circulares y otros documentos relevantes, organizados por categorías y disponibles para descarga directa.'
    },
    {
        title: 'Generador de Informes y Reportes Automáticos',
        description: 'Facilita la creación de reportes académicos, estadísticas y resúmenes institucionales de forma automática, ahorrando tiempo y asegurando una presentación profesional y organizada de los datos.'
    }
]
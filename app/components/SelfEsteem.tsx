export default function SelfEsteem() {
  return (
    <section className="bg-gray-50 pt-12 md:pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Content */}
          <div className="space-y-6 order-1 lg:order-1 flex flex-col justify-center text-center lg:text-left">
            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 leading-tight">
              Quando foi a última vez que você se sentiu confiante e orgulhosa dos seus cabelos?
            </h2>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              <strong className="text-gray-800 font-bold">Biocapilar</strong> não é só um suplemento capilar – é o retorno da sua confiança feminina.
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Recupere a beleza natural dos seus cabelos e a autoestima que você merece com um suplemento que transforma fios fracos e ralos em cabelos fortes e volumosos. Biocapilar foi criado para que cada fio regenerado signifique mais autoestima, mais confiança e mais orgulho em ser você - naturalmente, sem químicas agressivas, com resultados que vão muito além do espelho.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-2 lg:order-2 flex items-end">
            <div className="flex justify-center w-full">
              <img 
                src="/jeans.png" 
                alt="Mulher confiante com cabelos saudáveis" 
                className="max-w-full h-auto"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
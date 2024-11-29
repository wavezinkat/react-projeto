import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >NK Solutions</span> é uma startup de tecnologia
        <span className="bg-gradient-to-r from-orange-500 to-purple-800 text-transparent bg-clip-text"> focada em seus clientes!</span>
        
    </h1>
    <p className="mt-10 text-lg text-center max-w-4xl" >
    A NK Solutions é uma inovadora Startup de produção de software, especializada em soluções 
    tecnológicas Com um forte compromisso com a qualidade e a eficiência, desenvolvemos
    produtos que transformam ideias em realidade, impulsionando negócios e promovendo o 
    crescimento digital. Nossa equipe talentosa e dedicada está comprometida em entregar 
    excelência em cada projeto, utilizando as mais recentes tecnologias e metodologias ágeis.
    Atuamos em diversos setores, desde startups até grandes corporações, sempre buscando
    entender as necessidades específicas de nossos clientes para oferecer soluções sob medida 
    que agreguem valor e competitividade. Na NKroo, nossa missão é ser um parceiro confiável na
    jornada de transformação digital, garantindo resultados excepcionais e a satisfação plena de
    nossos clientes. 
    </p>
    <div className="flex justify-center my-10">
        <a href="https://web.whatsapp.com" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
            Faça seu orçamento
        </a>
        <a href="https://portflio-leandro-thiago.vercel.app" className="py-3 px-4 mx-3 rounded-md border">
            Projetos
        </a>
    </div>
    
    <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
        <source src={video1} type="video/mp4" />
        Seu navegador não suporta o vídeo, seu comédia!
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
        <source src={video2} type="video/mp4" />
        Seu navegador não suporta o vídeo, seu comédia!
        </video>
    </div>
   </div>
  )
}

export default HeroSection

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"

const CodeChefIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className={className}>
    <path d="M11.007 0c-.787.031-1.515.37-2.222.685a12.27 12.27 0 01-1.864.703c-.635.176-1.3.354-1.814.788-.222.18-.356.439-.529.662-.309.486-.448 1.067-.457 1.638.036.61.216 1.2.376 1.786.368 1.262.807 2.503 1.197 3.759.366 1.161.703 2.344 1.294 3.416.197.394.35.808.535 1.206.027.067.052.158.142.149.136-.012.243-.115.368-.164.828-.414 1.74-.642 2.655-.749.708-.074 1.43-.078 2.131.054.72.163 1.417.426 2.092.724.36.172.719.348 1.088.498.048.04.135.058.16-.016.219-.327.469-.635.667-.976.495-1.061.522-2.279 1.038-3.331.358-.721.892-1.337 1.266-2.048.175-.266.431-.467.588-.747.437-.669.78-1.398 1.05-2.15.102-.293.172-.612.09-.919-.06-.299-.202-.57-.318-.848a2.481 2.481 0 00-.278-.66c-.407-.676-1.07-1.149-1.743-1.536-1.045-.59-2.196-.969-3.351-1.28A20.733 20.733 0 0011.426.01a5.005 5.005 0 00-.42-.01zm-.889.606c-.261.223-.363.569-.468.883-.168.568-.263 1.163-.207 1.756.064 1.062.197 2.12.33 3.175.18 1.352.387 2.7.677 4.034.026.165.064.347.05.51-.115-.175-.182-.383-.258-.58-.25-.765-.432-1.549-.604-2.334a26.008 26.008 0 01-.562-4.317c-.025-.843-.004-1.726.37-2.501.118-.226.259-.46.48-.597a.411.411 0 01.218-.049l-.026.02zM6.516 1.77c.128 0 .139.159.168.252.266.798.422 1.628.679 2.428.174.649.238 1.323.308 1.991.097 1.039.108 2.085.246 3.12.026.199.082.393.119.59.01.067-.059.049-.083.014-.148-.161-.183-.391-.246-.592-.16-.645-.242-1.305-.334-1.962-.174-1.316-.287-2.64-.529-3.945-.158-.612-.334-1.222-.495-1.832-.022-.087-.029-.203.046-.268a.233.233 0 01.121-.796zm11.221.082c.148.017.24.143.324.252.236.353.356.764.466 1.167.17.677.217 1.374.247 2.068.014.26.027.522.027.784-.025.195-.08.384-.115.576-.174.66-.39 1.31-.69 1.924-.297.564-.664 1.081-1.096 1.534-.133.11-.267.24-.428.304.144-.249.32-.475.455-.726.357-.632.622-1.308.853-1.99.246-.797.414-1.618.49-2.45.042-.461.065-.925.025-1.387-.065-.469-.173-.932-.33-1.378-.132-.345-.31-.688-.59-.922-.048-.04-.087-.133-.043-.186.235-.498.034.025.405-.57zm-2.274.433c.17.067.29.222.397.364.31.457.452 1.01.502 1.553.04.53-.018 1.06-.125 1.582-.16.676-.437 1.325-.828 1.899-.563.838-1.311 1.536-2.135 2.106-.23.150-.468.286-.715.405-.23.086-.474.14-.716.192.23-.13.451-.274.672-.417.57-.40 1.108-.844 1.591-1.34.753-.784 1.365-1.708 1.718-2.735.216-.626.345-1.28.335-1.935-.028-.568-.144-1.14-.423-1.638-.14-.23-.33-.43-.457-.666a.478.478 0 01-.033-.162c.042-.07.124-.089.19-.126l.027-.082zm-7.63.163c.152.038.304.17.377.314.15.321.22.672.254 1.022.064.575.064 1.153.047 1.73-.058 1.084-.21 2.16-.404 3.228-.152.788-.336 1.57-.528 2.352-.043.175-.11.345-.16.52-.024.07-.106.026-.102-.034.007-.597.067-1.189.157-1.777.217-1.341.515-2.665.787-3.993.12-.605.222-1.213.298-1.823.027-.282.06-.565.044-.848-.02-.342-.09-.682-.217-1.001-.042-.086-.092-.178-.187-.217a.373.373 0 01-.366-.473zm4.948.233c.06.008.12.027.17.06.221.12.336.366.416.592.204.52.255 1.089.237 1.643-.014.46-.065.92-.175 1.37-.267 1.011-.72 1.967-1.3 2.838-.369.564-.798 1.088-1.25 1.59-.146.157-.296.31-.455.452-.085.064-.178.119-.278.154a.55.55 0 01.217-.33c.554-.59 1.053-1.234 1.455-1.934.35-.593.619-1.227.812-1.882.198-.702.302-1.428.33-2.155.022-.513.014-1.035-.102-1.539-.086-.33-.224-.654-.45-.915-.08-.077-.153-.204-.127-.32.036-.059.098-.1.16-.12.11-.032.227-.026.34-.504zm-2.361.285c.136.027.247.124.337.228.239.268.369.619.427.968.107.564.068 1.146-.016 1.71-.105.562-.265 1.112-.478 1.645-.402.976-.947 1.891-1.694 2.625-.267.265-.564.498-.886.692-.127.079-.265.14-.408.184a.986.986 0 01.217-.235c.56-.545 1.047-1.159 1.434-1.828.52-.902.854-1.896 1.028-2.918.09-.577.138-1.162.124-1.748-.022-.4-.088-.803-.273-1.166-.05-.09-.093-.193-.186-.253-.03-.021-.074-.059-.05-.098.098-.132.267-.185.424-.806zm-5.09.075c.08.011.16.04.223.094.23.18.334.475.407.747.127.467.161.953.147 1.434-.045 1.098-.254 2.186-.561 3.246-.215.725-.472 1.44-.792 2.129-.104.226-.222.446-.349.66-.034.056-.077.153-.158.14-.028-.034-.018-.083-.008-.122.215-.736.479-1.457.667-2.205.35-1.337.583-2.702.675-4.079.025-.397.048-.8-.022-1.193-.065-.297-.188-.59-.409-.813-.042-.043-.088-.108-.058-.167.038-.075.128-.089.203-.1l.035-.77zM9.48 3.18c.143.027.255.138.347.247.27.335.402.763.45 1.186.073.564.023 1.136-.078 1.692-.186.933-.524 1.835-1.026 2.652-.356.564-.795 1.078-1.302 1.516-.188.16-.39.305-.6.428-.048.03-.11.063-.166.03-.026-.029-.01-.07.008-.1.537-.676 1.013-1.4 1.41-2.165.48-.944.822-1.958 1.042-2.99.132-.628.224-1.266.23-1.908 0-.376-.033-.755-.16-1.112-.048-.128-.112-.25-.206-.35-.026-.03-.064-.072-.045-.114.028-.024.066-.022.1-.024l-.004.012zm7.802.332c.066.015.137.064.142.134.028.212-.145.356-.225.53-.222.432-.326.91-.392 1.387-.105.78-.084 1.57-.115 2.355.002.15.017.3.04.447.017.09.037.202.13.25.06.03.076.114.037.165-.048.075-.137.107-.213.138-.05-.02-.059-.084-.073-.13-.10-.303-.132-.622-.152-.937-.022-.39-.006-.78.024-1.17.063-.778.168-1.556.412-2.302.126-.37.278-.737.51-1.054.048-.062.1-.134.18-.152l-.305-.661zm-11.24.083c.038.007.078.02.104.048.111.09.132.243.159.375.11.432.133.88.153 1.323.026.461.028.925.103 1.383.04.23.077.464.16.684.037.094.085.203.19.236.046.02.054.087.02.122-.06.083-.17.1-.263.132-.056-.011-.066-.077-.087-.121-.15-.338-.19-.712-.235-1.076-.115-.984-.065-1.98.039-2.963.016-.156.035-.314.09-.463.02-.045.036-.105.09-.115l-.523-.585zm7.792.83c.038.008.078.02.11.045.134.126.2.301.255.47.13.447.15.915.13 1.377-.035.68-.133 1.358-.32 2.015-.222.778-.521 1.542-.964 2.22-.214.324-.458.63-.74.893-.094.08-.19.164-.308.211-.024-.02-.02-.054-.008-.08.214-.405.472-.784.68-1.192.486-.936.822-1.943 1.017-2.977.106-.583.177-1.174.19-1.768.003-.376-.03-.755-.147-1.116-.044-.132-.103-.26-.194-.366-.03-.037-.078-.085-.058-.137.038-.066.11-.087.173-.115l.184-.48zm-4.49.053c.055.008.116.027.154.07.1.12.134.277.166.425.068.427.074.862.048 1.293-.07 1.007-.262 2.003-.524 2.981-.134.47-.29.936-.48 1.39-.07.168-.15.333-.24.492-.03.05-.055.123-.122.134-.04-.01-.054-.054-.05-.09.092-.353.214-.698.308-1.052.298-1.076.503-2.177.6-3.285.04-.495.06-.994.01-1.49-.02-.19-.054-.382-.133-.558-.03-.065-.067-.132-.13-.174-.024-.018-.03-.053-.01-.077.048-.039.11-.045.167-.062l.236.003zm2.277.166c.056.046.087.114.116.178.114.286.152.594.178.9.045.639.014 1.281-.076 1.913-.127.864-.336 1.714-.63 2.54-.142.386-.304.768-.49 1.14-.066.137-.137.272-.214.403-.03.047-.05.115-.114.13-.04-.02-.042-.07-.04-.11.083-.326.193-.645.288-.968.412-1.339.705-2.717.85-4.113.053-.496.087-.995.065-1.493-.014-.198-.037-.4-.12-.584-.03-.068-.07-.14-.142-.174-.05-.022-.002-.078.036-.09.112-.048.232-.06.35-.09l-.057-.582zm-4.223.226c.066.011.114.068.144.124.103.213.14.45.17.684.075.638.065 1.284.017 1.924-.106 1.21-.31 2.41-.636 3.58-.15.528-.32 1.05-.523 1.562-.042.107-.087.212-.142.314-.027.044-.044.114-.106.12-.05-.016-.053-.076-.06-.118-.055-.262-.086-.528-.122-.793-.064-.495-.106-.992-.133-1.49-.073-1.327-.004-2.66.210-3.97.072-.428.158-.854.26-1.276.037-.143.077-.286.134-.423.022-.05.05-.104.104-.117l.683-.121zm-2.76.362c.05.007.107.027.137.07.13.18.186.398.23.613.099.495.132.998.147 1.5.012.43.013.862-.025 1.291-.033.353-.083.704-.153 1.052-.06.28-.125.56-.21.833-.038.12-.077.242-.13.357-.02.046-.044.106-.102.117-.054-.03-.051-.102-.057-.155-.073-.475-.113-.954-.15-1.432-.082-1.053-.088-2.11-.01-3.163.023-.38.06-.758.13-1.13.03-.15.063-.3.11-.443.02-.048.04-.102.09-.112l.004-.004z" />
  </svg>
)

const CodeForcesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.578 17.047c-.391.391-.902.586-1.414.586s-1.023-.195-1.414-.586l-3.172-3.172-3.172 3.172c-.391.391-.902.586-1.414.586s-1.023-.195-1.414-.586c-.781-.781-.781-2.047 0-2.828l3.172-3.172-3.172-3.172c-.781-.781-.781-2.047 0-2.828.391-.391.902-.586 1.414-.586s1.023.195 1.414.586l3.172 3.172 3.172-3.172c.391-.391.902-.586 1.414-.586s1.023.195 1.414.586c.781.781.781 2.047 0 2.828l-3.172 3.172 3.172 3.172c.781.781.781 2.047 0 2.828z" />
  </svg>
)

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 gradient-text"
          >
            Ayush Kumar
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            <span>{typedText}</span>
            <span className="animate-blink">|</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
          >
            I build exceptional and accessible digital experiences for the web.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button size="lg" className="gradient-bg text-white hover:opacity-90">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Me
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center space-x-4 mt-12"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:text-blue-400 hover:bg-white/10"
            onClick={() => window.open("https://github.com/supernova0311", "_blank")}
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:text-blue-400 hover:bg-white/10"
            onClick={() => window.open("https://www.linkedin.com/in/ayush-kumar-4b2458280/", "_blank")}
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:text-blue-400 hover:bg-white/10"
            onClick={() => window.open("https://www.codechef.com/users/your_codechef_username", "_blank")}
            aria-label="CodeChef Profile"
          >
            <CodeChefIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:text-blue-400 hover:bg-white/10"
            onClick={() => window.open("https://codeforces.com/profile/your_codeforces_username", "_blank")}
            aria-label="CodeForces Profile"
          >
            <CodeForcesIcon className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}


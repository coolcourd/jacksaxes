const FlyingAxe = () => {
    const handleLoad = (e) => {
        let left = -300
        let spin = 0
        let top = 180
        let opacity = 100
        setInterval(() => {
          left += 4;
          spin += 4;
          e.target.style.top = `${top}px`
          e.target.style.opacity = `${opacity}%`
          if (spin < 350) {
            top = 180
            opacity = 100
            e.target.style.transform = `rotate(${spin}deg)`
          }
          if (left < 101) {
          e.target.style.left = left + 'px';
          }
          if (left > 5000 && opacity > 0) {
            top += 4;
            opacity -= 2
          }
          if (left > 10000) {
            left = -300
            spin = 0
          }
        }, 1)
      }
    return (
        <div class="w3-animate-left"><img src='/assets/axe.png' alt='animated axe' onLoad={handleLoad} className='thrown' /></div>
    )
}

export default FlyingAxe;
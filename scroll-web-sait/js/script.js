gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {

  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
})

  gsap.fromTo('.hearoo-section', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hearoo-section',
      start: 'center',
      end: '820',
      scrub: true
    }
  })

  let itemseL = gsap.utils.toArray('.gallery_left .galery__item')

  itemseL.forEach(item => {
    gsap.fromTo(item, { x: -50, opacity: 0 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true
      }
    })
  })

  let itemseR = gsap.utils.toArray('.gallery_right .galery__item')

  itemseR.forEach(item => {
    gsap.fromTo(item, { x: 50, opacity: 0 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true
      }
    })
  })
}



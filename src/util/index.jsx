
function connect(...cbs) {
  return function callback(...args) {
    for (const cb of cbs) {
      if (cb) {
        cb.apply(this, args)
      }
    }
  }
}

function promiseThrottle(func, gap = 300) {
  let canRun = true
  let lastArgs
  let lastResolve
  let lastReject

  function delay() {
    setTimeout(() => {
      if (canRun) {
        func(...lastArgs).then(lastResolve, lastReject)
      } else {
        delay()
      }
    }, gap)
  }

  return function hof(...args) {
    let p
    if (canRun) {
      canRun = false
      p = new Promise((resolve, reject) => {
        func(...args).then(resolve, reject)
      })
    } else {
      p = new Promise((resolve, reject) => {
        lastArgs = args
        lastResolve = resolve
        lastReject = reject
      })
      delay()
    }

    p.then(() => {
      canRun = true
    }, (e) => {
      canRun = true
      throw e
    })
    return p
  }
}

export {
  connect,
  promiseThrottle,
}

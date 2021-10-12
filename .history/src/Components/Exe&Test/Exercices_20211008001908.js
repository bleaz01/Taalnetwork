import React from 'react'

const Exercices = () => {
    return (
        <div class="flex items-center min-h-screen">
        <div class="flex flex-wrap justify-center">
          <div class="card-zoom">
            <div class="card-zoom-image bg-beetle"></div>
            <h1 class="card-zoom-text">BEETLE</h1>
          </div>
      
          <div class="card-zoom">
            <div class="card-zoom-image bg-fiat"></div>
            <h1 class="card-zoom-text">FIAT</h1>
          </div>
      
          <div class="card-zoom">
            <div class="card-zoom-image bg-van"></div>
            <h1 class="card-zoom-text">VAN</h1>
          </div>
      
          <div class="card-zoom">
            <div class="card-zoom-image bg-mini"></div>
            <h1 class="card-zoom-text">MINI</h1>
          </div>
        </div>
      </div>
    )
}

export default Exercices

let main = `
<section class="hero is-info is-fullheight is-flex-direction-column m-0 py-0">
<div>
    <div class="hero-body is-flex-direction-column mt-5">
      <h2 class="title">International and national shipments, enter your address and email</h2>
      <div class="is-flex-direction-row is-flex-desktop is-flex-direction-column-mobile">
          <div class="field column">
              <label class="label is-small">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input is-small" type="email" placeholder="@gmail.com" id="email">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
          </div>
          <div class="field column is-one-quarter">
              <label class="label is-small">Country</label>
              <p class="control has-icons-left">
                <span class="select is-small">
                  <select id="select_country">
                    <option selected>Country</option>
                    <option value="Spain">Spain</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Usa">Usa</option>
                    <option value="México">México</option>
                  </select>
                </span>
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
          </div>
          <div class="field column">
              <label class="label is-small">Direction</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input is-small" id="direction" type="direction" placeholder="Direction">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
          </div>
      </div>
      <div class="control mt-4">
      <button class="button is-primary" id="btn_buy_top">Buy</button>
    </div>
    <div id="alert" class="m-3"></div>
    </div>
    <!-- cartas -->      
    <div id="features"></div> 

    <div class="section">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_1200,pg_1,t_base_params,w_1200/v1527693732/blog-post-covers/000/001/323/1323-original.png?1527693732" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Premium Materials</strong>
              <br>
              Top materials used in the most appropriate way.
            </p>
          </div>      
      </article>

      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://i.ebayimg.com/thumbs/images/g/zlIAAOSwKTNhE-Iu/s-l300.jpg" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Fast Shipping</strong>
              <br>
              Anywhere, with the highest security for your product.
            </p>
          </div>      
      </article>

      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://i.pinimg.com/originals/9f/12/ed/9f12edd222fb4f345edff66cd1e09d2d.jpg" alt="Image">
          </figure>
        </div>

        <div class="media-content">
          <div class="content">
            <p>
              <strong>Quality Assurance</strong>
              <br>
                Quality assured by our sales team.
            </p>
          </div>      
      </article>
    </div>

    <div id="how_it_works"></div>
    <div class="hero-body is-justify-content-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BUvEEVq4woU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
    </div>

    <div id="pricing"></div>
    <div class="hero-body is-flex-direction-column is-flex-mobile is-flex-direction-row is-flex-desktop">
        <div class="item column">
            <div class="card box">
                <header class="card-header">
                <p class="card-header-title">
                    Nike air for One
                </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        No fault, play along. Made with at least 20% recycled materials by weight, the original model that made history is updated with flawless skin.  You can check the available sizes in the following link: 
                        <a href="nike.com/es/t/air-force-1-07-next-nature-zapatillas-SPgGc7/DC9486-100">Nike</a>
                    </div>
                </div>
                <footer class="card-footer">
                <a href="#" class="card-footer-item">Buy</a>
                </footer>
            </div>
        </div>

      
        <div class="item column">
            <div class="card box">
                <header class="card-header">
                <p class="card-header-title">
                    Nike air Jordan
                </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        Inspired by the early AJ1s, the Air Jordan 1 Mid shoes offer retro Jordan fans the opportunity to follow in the footsteps of greatness. Innovative color brings the trim of classic, flawless materials to life and brings a touch of novelty to a familiar design. You can check the available sizes in the following link: 
                        <a href="https://www.nike.com/es/t/air-jordan-1-mid-zapatillas-scZZ99/554724-133">Nike</a>
                    </div>
                </div>
                <footer class="card-footer">
                <a href="#" class="card-footer-item">Buy</a>
                </footer>
            </div>
        </div>

        <div class="item column">
            <div class="card box">
                <header class="card-header">
                <p class="card-header-title">
                    Nike air Max
                </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        There is nothing as light, comfortable or authentic as the Nike Air Max 90 Premium, which stays true to its roots with the iconic waffle outsole, stitched overlays and classic TPU touches. New colors bring a fresh look and Max Air cushioning adds comfort with every step. You can check the available sizes in the following link: 
                        <a href="https://www.nike.com/es/t/air-max-90-zapatillas-lsQK9x/DA1641-201">Nike</a>
                    </div>
                </div>
                <footer class="card-footer">
                <a href="#" class="card-footer-item">Buy</a>
                </footer>
            </div>
        </div>
    </div>

  </section> 
</div>`

export {main}
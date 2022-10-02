import React from 'react';


function Card() {
  return (
    <div class="card-group m-2" >
  <div class="card m-2"  style={{backgroundColor:'skyblue'}}>
    <img src="/images/employees.jpg" class="card-img-top" alt="oops" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card m-2" style={{backgroundColor:'lightgreen'}}>
    <img src="/images/schedule.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card m-2"  style={{backgroundColor:'rgb(224, 176, 255)'}}>
    <img src="/images/queries.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">ANYTHING of your concern</small>
    </div>
  </div>
</div>

  )
}

export default Card;
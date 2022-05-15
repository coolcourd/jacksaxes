<nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="/">🪓 Jack's Axes</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <x-navitem text="Home" link="/" page="{{$page}}" />
        <x-navitem text="About" link="/about" page="{{$page}}" />
        <x-navitem text="Waiver" link="/waiver" page="{{$page}}" />
        <x-navitem text="Schedule" link="/schedule" page="{{$page}}" />          
      </ul>
    </div>
  </nav>
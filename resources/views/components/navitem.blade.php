<li class="nav-item @if ($page == $text) active @endif">
    <a class="nav-link" href="{{$link}}">{{$text}} @if ($page == $text) <span class="sr-only">(current)</span> @endif</a>
  </li>
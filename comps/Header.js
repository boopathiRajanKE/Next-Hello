import Link from "next/link"

const LinkStyle = {
  marginRight: 15,
}

const Header = (_) => (
  <div>
    <Link href="/">
      <a style={LinkStyle}> Home</a>
    </Link>
    <Link href="/about">
      <a style={LinkStyle}>About</a>
    </Link>
    <Link href="/store">
      <a style={LinkStyle}>store</a>
    </Link>
  </div>
)

export default Header

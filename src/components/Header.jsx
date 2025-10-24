export default function Header({author}){
	return <h1>Belajar react {author ? author : 'Patuan'}</h1>;
}
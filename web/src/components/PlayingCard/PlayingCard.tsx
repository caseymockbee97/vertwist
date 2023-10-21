import styled from 'styled-components'
import CardBack from 'src/Assets/Images/CardBack.png'
import CardFront from 'src/Assets/Images/CardFront.png'

const PlayingCard = () => {
  return (
    <Card>
      <div className="card-side front"></div>
      <div className="card-side back"></div>
    </Card>
  )
}

const Card = styled.div`
  perspective: 150rem;
  position: relative;
  height: 300px;
  width: 200px;

  box-shadow: none;
  background: none;

  .card-side {
    height: 300px;
    border-radius: 15px;
    transition: all 0.8s ease;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    padding: 2rem;
  }

  .card-side.back {
    transform: rotateY(-180deg);
    background-image: url(${CardFront});
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card-side.front {
    background-image: url(${CardBack});
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:hover .card-side.front {
    transform: rotateY(180deg);
  }

  &:hover .card-side.back {
    transform: rotateY(0deg);
  }
`
export default PlayingCard

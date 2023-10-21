import styled from 'styled-components'
import CardBack from 'src/Assets/Images/CardBack.png'
import CardFront from 'src/Assets/Images/CardFront.png'

const PlayingCard = () => {
  return (
    <Card>
      <img src={CardBack} className="card-side front"></img>
      <img src={CardFront} className="card-side back"></img>
    </Card>
  )
}

const Card = styled.div`
  perspective: 150rem;
  position: relative;
  width: 240px;
  /* Calculated Height */
  height: 384px;

  .card-side {
    border-radius: 15px;
    transition: all 0.8s ease;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 240px;
  }

  .card-side.back {
    transform: rotateY(-180deg);
  }

  .card-side.front {
  }

  &:hover .card-side.front {
    transform: rotateY(180deg);
  }

  &:hover .card-side.back {
    transform: rotateY(0deg);
  }
`
export default PlayingCard

import Carousel from 'react-bootstrap/Carousel';
import gambar1 from "./img/pict1.jpg"
import gambar2 from "./img/pict2.jpg"
import gambar3 from "./img/pict3.jpg"
import gambar4 from "./img/pict4.jpg"
import gambar5 from "./img/pict5.jpg"


function CarouselSlider() {
  return (
    <Carousel slide >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar1}
          alt="1 slide"
        />
        <Carousel.Caption>
          <h3>Kembangkan Peternakan Anda</h3>
          <p>Cari sebanyak-banyaknya ilmu dari tutorial dan aktivitas peternak lain .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar2}
          alt="2 slide"
        />

        <Carousel.Caption>
          <h3>Hasilkan Hewan Ternak Berkualitas!</h3>
          <p>Melalui media digital yang canggih.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar3}
          alt="3 slide"
        />

        <Carousel.Caption>
          <h3>Membantu Dalam Mengelola Kendala</h3>
          <p>
             Mencari Informasi yang di alami peternak lainnya.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar4}
          alt="4 slide"
        />

        <Carousel.Caption>
          <h3>Hewan Ternak Yang Sehat</h3>
          <p>
            Dengan tips dan trick dari orang yang berpengalaman.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gambar5}
          alt="5 slide"
        />

        <Carousel.Caption>
          <h3 className=''>Cukupi Kebutuhan Hewan Ternak</h3>
          <p>
            Mencari relasi dengan mudah.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
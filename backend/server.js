const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));


let artworks = [
  { id: 1, title: 'coloured cement work', price: 50, image: 'Camera Roll/4b8dd0c0-425b-4149-b96c-f9345aba5373.jfif' , available: true, bookedBy: null},
    { id: 2, title: 'flower vase', price: 50, image: 'Camera Roll/7b512480-a6cc-408b-a54a-fa992dde507d.jfif', available: true, bookedBy: null },
    { id: 3, title: 'coffee table', price: 50, image: 'Camera Roll/88d3d4c7-e1c3-4b37-8565-d4f24efadcba.jfif' , available: true, bookedBy: null },
    { id: 4, title: 'beautifully coloured vase', price: 50, image: 'Camera Roll/b4c668a3-a69e-4826-8a4b-383a2c836383.jfif' , available: true, bookedBy: null},
    { id: 5, title: 'cement swan', price: 50, image: 'Camera Roll/cf5f828b-ba58-4505-8d22-de4e13611bed.jfif' , available: true, bookedBy: null},
    { id: 6, title: 'flower vase', price: 50, image: 'Camera Roll/4b8dd0c0-425b-4149-b96c-f9345aba5373.jfif', available: true, bookedBy: null },
    { id: 7, title: 'A beautiful painting of fruits', price: 50, image: 'Camera Roll/01.jpg' , available: true, bookedBy: null},
    { id: 8, title: 'Minimalist Wooden Table', price: 50, image: 'https://images.unsplash.com/photo-1582582494700-7a0e4e7d1c35?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null },
    { id: 9, title: 'Abstract Ceramic Vase', price: 50, image: 'https://images.unsplash.com/photo-1602524810092-b6e6c57b0d44?auto=format&fit=crop&w=800&q=80', available: true, bookedBy: null },
    { id: 10, title: 'Vintage Floral Pot', price: 50, image: 'https://images.unsplash.com/photo-1616627459539-9cdb2d3dfcc5?auto=format&fit=crop&w=800&q=80', available: true, bookedBy: null },
    { id: 11, title: 'A beautiful pencil sketch', price: 100, image: 'Camera Roll/Sir.jpg' , available: true, bookedBy: null},
    { id: 12, title: 'A pencil sketch', price: 50, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null },
    { id: 13, title: ' Design pencil sketch', price: 50, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 14, title: 'Mordern drawing', price: 50, image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80', available: true, bookedBy: null },
    { id: 15, title: ' Geometric Art', price: 50, image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=800&q=80', available: true, bookedBy: null },
    { id: 16, title: 'beautifully shaded', price: 50, image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 17, title: 'Great drawings', price: 50, image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 18, title: ' fine framed drawing', price: 50, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 19, title: 'skillful drawing', price: 50, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 20, title: 'Mordern fine drawing', price: 50, image: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 21, title: 'Handmade sketch', price: 50, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', available: true, bookedBy: null } ,
    { id: 22, title: 'Textured Clay Vase', price: 50, image: 'https://images.unsplash.com/photo-1612197528255-6c63b7a54c2a?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 23, title: 'Modern Glass Terrarium', price: 50, image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80' },
    { id: 24, title: 'Scandinavian Wooden Stool', price: 50, image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=800&q=80', available: true, bookedBy: null },
    { id: 25, title: 'Ceramic Face Planter', price: 50, image: 'https://images.unsplash.com/photo-1603201667230-1c0c9e1f8baf?auto=format&fit=crop&w=800&q=80', available: true, bookedBy: null },
    { id: 26, title: 'Abstract Wall Sculpture', price: 50, image: 'https://images.unsplash.com/photo-1554189097-ffe88e998a6b?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 27, title: 'Minimalist Metal Lamp', price: 50, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 28, title: 'Handmade Woven Basket', price: 50, image: 'https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 29, title: 'Decorative Concrete Planter', price: 50, image: 'https://images.unsplash.com/photo-1587731556938-38755b4803a6?auto=format&fit=crop&w=800&q=80', available: true, bookedBy: null },
    { id: 30, title: 'Rustic Wooden Bench', price: 50, image: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null},
    { id: 31, title: 'Artisan Ceramic Bowl', price: 50, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80' , available: true, bookedBy: null}
    ];


let bookings = [];

app.get('/api/artworks', (req, res) => {
  res.json(artworks);
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings.sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt)));
});

app.post('/api/book', (req, res) => {
  const { id, user } = req.body;
  const item = artworks.find(x => x.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Artwork not found' });
  }
  if (!item.available) {
    return res.status(400).json({ message: 'Artwork already booked by ' + item.bookedBy });
  }
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ message: 'Customer name and email are required' });
  }

  item.available = false;
  item.bookedBy = user.name;

  // Store booking record
  bookings.push({
    id: item.id,
    title: item.title,
    price: item.price,
    customerName: user.name,
    customerEmail: user.email,
    customerPhone: user.phone || '',
    customerAddress: user.address || '',
    bookedAt: new Date().toISOString()
  });

  res.json({ success: true, item });
});

app.post('/api/unbook', (req, res) => {
  const { id } = req.body;
  const item = artworks.find(x => x.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Artwork not found' });
  }

  item.available = true;
  item.bookedBy = null;

  // Remove booking record so notifications clear
  bookings = bookings.filter(b => b.id !== id);

  res.json({ success: true, item, bookings });
});

app.listen(port, () => {
  console.log(`Artwork booking API listening at http://localhost:${port}`);
});
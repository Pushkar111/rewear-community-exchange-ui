
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Heart } from 'lucide-react';

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for demonstration
  const items = [
    {
      id: 1,
      title: 'Vintage Leather Jacket',
      size: 'M',
      condition: 'Excellent',
      tags: ['Vintage', 'Leather', 'Jacket'],
      image: '/placeholder.svg',
      user: 'Sarah M.'
    },
    {
      id: 2,
      title: 'Summer Floral Dress',
      size: 'S',
      condition: 'Good',
      tags: ['Summer', 'Dress', 'Floral'],
      image: '/placeholder.svg',
      user: 'Emma L.'
    },
    {
      id: 3,
      title: 'Designer Sneakers',
      size: '9',
      condition: 'Like New',
      tags: ['Sneakers', 'Designer', 'Sports'],
      image: '/placeholder.svg',
      user: 'Mike R.'
    },
    {
      id: 4,
      title: 'Wool Winter Coat',
      size: 'L',
      condition: 'Very Good',
      tags: ['Winter', 'Coat', 'Wool'],
      image: '/placeholder.svg',
      user: 'Anna K.'
    },
    {
      id: 5,
      title: 'Casual Denim Jeans',
      size: '32',
      condition: 'Good',
      tags: ['Jeans', 'Denim', 'Casual'],
      image: '/placeholder.svg',
      user: 'Tom S.'
    },
    {
      id: 6,
      title: 'Silk Evening Gown',
      size: 'M',
      condition: 'Excellent',
      tags: ['Evening', 'Silk', 'Formal'],
      image: '/placeholder.svg',
      user: 'Lisa P.'
    }
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container-padding max-w-7xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gradient mb-2">
          Browse Items
        </h1>
        <p className="text-muted-foreground">
          Discover amazing items from our community
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="sm:w-auto">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="glass border-white/20 hover:border-white/30 transition-all duration-300 group overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg truncate">{item.title}</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-red-500">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">Size {item.size}</Badge>
                <Badge variant="outline">{item.condition}</Badge>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">by {item.user}</p>
                <Button size="sm" className="gradient-primary text-white">
                  Request Swap
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No items found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Browse;

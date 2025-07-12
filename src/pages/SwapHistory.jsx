
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays, MessageSquare, Star, Package } from 'lucide-react';

const SwapHistory = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Mock data for demonstration
  const swaps = [
    {
      id: 1,
      status: 'completed',
      myItem: 'Vintage Leather Jacket',
      theirItem: 'Designer Sneakers',
      partner: 'Sarah Mitchell',
      partnerAvatar: '/placeholder.svg',
      date: '2024-01-15',
      rating: 5,
      feedback: 'Amazing swap! The jacket was exactly as described.'
    },
    {
      id: 2,
      status: 'pending',
      myItem: 'Summer Floral Dress',
      theirItem: 'Silk Scarf Collection',
      partner: 'Emma Rodriguez',
      partnerAvatar: '/placeholder.svg',
      date: '2024-01-10',
      rating: null,
      feedback: null
    },
    {
      id: 3,
      status: 'completed',
      myItem: 'Winter Wool Coat',
      theirItem: 'Vintage Handbag',
      partner: 'Lisa Chen',
      partnerAvatar: '/placeholder.svg',
      date: '2024-01-05',
      rating: 4,
      feedback: 'Great condition, very happy with the swap!'
    },
    {
      id: 4,
      status: 'cancelled',
      myItem: 'Denim Jacket',
      theirItem: 'Casual Sneakers',
      partner: 'Mike Johnson',
      partnerAvatar: '/placeholder.svg',
      date: '2023-12-28',
      rating: null,
      feedback: null
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredSwaps = activeTab === 'all' 
    ? swaps 
    : swaps.filter(swap => swap.status === activeTab);

  return (
    <div className="container-padding max-w-6xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gradient mb-2">
          Swap History
        </h1>
        <p className="text-muted-foreground">
          Track all your past and current swaps
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Swaps', value: '12', icon: Package },
          { label: 'Completed', value: '8', icon: Star },
          { label: 'Pending', value: '3', icon: CalendarDays },
          { label: 'Avg Rating', value: '4.8', icon: Star }
        ].map((stat, index) => (
          <Card key={index} className="glass border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Swaps List */}
      <Card className="glass border-white/20">
        <CardHeader>
          <CardTitle>Your Swaps</CardTitle>
          <CardDescription>All your swap activities in one place</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="space-y-4">
                {filteredSwaps.map((swap) => (
                  <Card key={swap.id} className="border border-border/50 hover:border-border transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={swap.partnerAvatar} />
                            <AvatarFallback>
                              {swap.partner.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{swap.partner}</h3>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <CalendarDays className="h-4 w-4" />
                              <span>{new Date(swap.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(swap.status)}>
                          {swap.status.charAt(0).toUpperCase() + swap.status.slice(1)}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-muted-foreground">Your Item</p>
                          <p className="font-medium">{swap.myItem}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-muted-foreground">Their Item</p>
                          <p className="font-medium">{swap.theirItem}</p>
                        </div>
                      </div>

                      {swap.status === 'completed' && swap.rating && (
                        <div className="border-t pt-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < swap.rating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                Rated {swap.rating}/5
                              </span>
                            </div>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                          </div>
                          {swap.feedback && (
                            <p className="text-sm text-muted-foreground mt-2 italic">
                              "{swap.feedback}"
                            </p>
                          )}
                        </div>
                      )}

                      {swap.status === 'pending' && (
                        <div className="border-t pt-4 flex space-x-2">
                          <Button size="sm" className="gradient-primary text-white">
                            Complete Swap
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm">
                            Cancel
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {filteredSwaps.length === 0 && (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      No {activeTab === 'all' ? '' : activeTab} swaps found.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SwapHistory;

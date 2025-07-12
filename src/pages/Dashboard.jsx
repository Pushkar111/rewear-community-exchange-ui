
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Package, ArrowRightLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Items Listed', value: '12', icon: Package, color: 'text-blue-600' },
    { label: 'Active Swaps', value: '3', icon: ArrowRightLeft, color: 'text-green-600' },
    { label: 'Completed Swaps', value: '8', icon: Heart, color: 'text-purple-600' },
  ];

  return (
    <div className="container-padding max-w-7xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gradient mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-muted-foreground">
          Manage your items and track your swaps
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="glass border-white/20 hover:border-white/30 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started with your next swap</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link to="/add-item">
              <Button className="w-full gradient-primary text-white justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Add New Item
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" className="w-full justify-start">
                <Package className="h-4 w-4 mr-2" />
                Browse Items
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest swaps and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Badge variant="secondary">New</Badge>
                <p className="text-sm text-muted-foreground">
                  You received a swap request for your vintage jacket
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="outline">Completed</Badge>
                <p className="text-sm text-muted-foreground">
                  Successfully swapped with Sarah M.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary">Listed</Badge>
                <p className="text-sm text-muted-foreground">
                  Added new summer dress to your collection
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

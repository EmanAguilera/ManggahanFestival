import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import toast from 'react-hot-toast';

// --- MOCK DATA (Menu Items) ---
const PRODUCTS = [
    { id: 1, name: "Gear 5 Gummy Parfait", price: 150, category: "Best Seller", description: "Vanilla custard with gummy fruit finish.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Sakura Mochi Donut", price: 80, category: "New", description: "Chewy pon-de-ring with strawberry glaze.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Pikachu Mango Float", price: 120, category: "Drink", description: "Layers of graham and fresh Guimaras mango.", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Gojo's Void Cake", price: 200, category: "Cake", description: "Dark chocolate ganache with blueberry core.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=500" },
    { id: 5, name: "Uzumaki Matcha Roll", price: 130, category: "Pastry", description: "Premium matcha swiss roll with cream.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=500" },
    { id: 6, name: "Titan Colossal Shake", price: 180, category: "Heavy", description: "Strawberry milkshake with cheesecake toppings.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=500" },
];

// --- ICONS ---
const CartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
);
const TrashIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
);
const PlusIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
);

export default function WelcomePage() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Add to Cart Logic
    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
        toast.success(`Added ${product.name}!`, {
            icon: '🍰',
            style: { borderRadius: '20px', background: '#333', color: '#fff' },
        });
    };

    // Remove from Cart
    const removeFromCart = (indexToRemove) => {
        setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    // Calculate Total
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    // WhatsApp Checkout Logic
    const handleCheckout = () => {
        if (cart.length === 0) {
            toast.error("Your cart is empty!");
            return;
        }

        // Format the message
        const orderList = cart.map(item => `- ${item.name} (₱${item.price})`).join('\n');
        const message = `Hello! I would like to order from Manggahan Festival:\n\n${orderList}\n\n*Total Amount: ₱${totalAmount}*`;
        
        // WhatsApp API Link (Replace 639123456789 with CLIENT NUMBER)
        const whatsappUrl = `https://wa.me/639123456789?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    };

    const scrollToMenu = () => {
        const element = document.getElementById('menu');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (


        
        <div className="flex flex-col min-h-screen font-sans bg-pink-50 text-gray-900 w-full overflow-x-hidden">
            <Helmet>
                <title>Anime Sweets | Manggahan Festival</title>
                <meta name="description" content="The sweetest anime-inspired desserts in Guimaras!" />
            </Helmet>

            {/* Custom Animations */}
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }
            `}</style>

            <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center space-x-2"
          >
            <img 
            src="/Manggahan_Dango.png"  // 👈 Change this to your actual file name
            alt="Manggahan Sweets Logo" 
            className="w-6 h-auto"  // Adjust size as needed (w-8 = 32px, w-10 = 40px)
            />
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Manggayan Sweets
                </span>
            </div>

          {/* Scroll to Menu Button */}
          <button 
            onClick={scrollToMenu}
            className="text-sm font-bold bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors shadow-md"
          >
            View Menu
          </button>
        </div>
      </nav>

            {/* --- HERO SECTION --- */}
            <header className="hero-section relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-purple-100 via-pink-50 to-pink-50">
                
                {/* Anime Blobs */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-pink-300 blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute top-1/2 left-0 -ml-20 w-64 h-64 rounded-full bg-purple-300 blur-3xl opacity-40"></div>

                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center relative z-10">
                    
                    {/* Text Side */}
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white border border-pink-200 shadow-sm text-pink-600 text-xs font-bold uppercase tracking-wide mb-6">
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-bounce"></span>
                            Live @ Manggahan Festival
                        </div>
                        
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-gray-900 tracking-tight">
                            Taste the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                                Anime Magic
                            </span>
                        </h1>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                            From the Grand Line to Guimaras! Experience our limited edition anime-inspired desserts. 
                            Sweet, aesthetic, and 100% Instagrammable.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 sm:px-0">
                            <button 
                                onClick={scrollToMenu} 
                                className="text-lg px-8 py-4 bg-pink-500 text-white font-bold rounded-2xl shadow-xl shadow-pink-200 hover:bg-pink-600 hover:scale-105 transition-all transform flex items-center gap-2 justify-center"
                            >
                                View Menu <span className="text-xl">🍰</span>
                            </button>
                        </div>
                    </div>

                    {/* Image Side (Hero Visual) */}
                    

                    <div className="relative hidden md:block group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-pink-200 to-transparent rounded-full blur-3xl -z-10"></div>
                        <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=500" // ← Replace later with real anime dessert
                        alt="Anime Dessert"
                        className="w-full max-w-[400px] h-auto object-cover rounded-3xl shadow-2xl border-4 border-white animate-float transform rotate-3 hover:rotate-0 transition-all duration-500"
                        />
                        </div>
                </div>
            </header>

            {/* --- MENU GRID --- */}
            <section id="menu" className="py-16 bg-white w-full rounded-t-[3rem] -mt-10 z-20 shadow-inner">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Festival Menu</h2>
                        <p className="text-lg text-gray-500">Limited stocks daily. Order before we run out!</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PRODUCTS.map((product) => (
                            <div key={product.id} className="bg-gray-50 rounded-3xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4">
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 z-10">
                                        {product.category}
                                    </div>
                                    <img 
                                        src={product.img} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="px-2 pb-2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-black text-pink-600">₱{product.price}</span>
                                        <button 
                                            onClick={() => addToCart(product)}
                                            className="bg-gray-900 text-white p-3 rounded-xl hover:bg-pink-500 transition-colors shadow-lg active:scale-95"
                                        >
                                            <PlusIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FLOATING CART BUTTON --- */}
            <button 
                onClick={() => setIsCartOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-gray-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 border-4 border-white"
            >
                <div className="relative">
                    <CartIcon />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-gray-900">
                            {cart.length}
                        </span>
                    )}
                </div>
                <span className="font-bold pr-1 hidden md:block">My Order</span>
            </button>

            {/* --- CART MODAL (Simple Overlay) --- */}
            {isCartOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
                    
                    {/* Drawer */}
                    <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col animate-slide-in-right">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black text-gray-900">Your Tray 🍩</h2>
                            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                <span className="text-2xl">×</span>
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-grow overflow-y-auto space-y-4">
                            {cart.length === 0 ? (
                                <div className="text-center text-gray-400 mt-20">
                                    <p className="text-6xl mb-4">🛒</p>
                                    <p>Your tray is empty.</p>
                                </div>
                            ) : (
                                cart.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl">
                                        <img src={item.img} className="w-16 h-16 rounded-lg object-cover" alt="thumb" />
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-sm text-gray-500">₱{item.price}</p>
                                        </div>
                                        <button onClick={() => removeFromCart(index)} className="text-red-400 hover:text-red-600 p-2">
                                            <TrashIcon />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        <div className="mt-6 border-t pt-6">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-500">Total Amount</span>
                                <span className="text-3xl font-black text-gray-900">₱{totalAmount}</span>
                            </div>
                            <button 
                                onClick={handleCheckout}
                                disabled={cart.length === 0}
                                className="w-full bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 active:scale-95 transition-all shadow-lg shadow-green-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <span>🚀</span> Send Order via WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
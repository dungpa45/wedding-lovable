
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Book, Heart, MessageSquare } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Sample initial guestbook entries
const initialEntries = [
  {
    id: 1,
    name: "Sarah & Michael",
    message: "We're so excited to celebrate with you both! Can't wait for the big day!",
    date: "June 2, 2024"
  },
  {
    id: 2,
    name: "Emma Wilson",
    message: "Congratulations on your engagement! Looking forward to the wedding!",
    date: "May 28, 2024"
  },
  {
    id: 3,
    name: "David & Lisa",
    message: "Wishing you both a lifetime of love and happiness. See you at the wedding!",
    date: "May 15, 2024"
  }
];

const Guestbook = () => {
  const { toast } = useToast();
  const [entries, setEntries] = useState(initialEntries);
  const [newEntry, setNewEntry] = useState({
    name: '',
    message: ''
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newEntry.name.trim() || !newEntry.message.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide your name and message.",
        variant: "destructive"
      });
      return;
    }
    
    // Add new entry with current date
    const today = new Date();
    const formattedDate = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}, ${today.getFullYear()}`;
    
    const newEntryWithId = {
      id: entries.length + 1,
      name: newEntry.name,
      message: newEntry.message,
      date: formattedDate
    };
    
    setEntries([newEntryWithId, ...entries]);
    
    toast({
      title: "Message Added!",
      description: "Thank you for signing our guestbook!",
    });
    
    // Reset form and close dialog
    setNewEntry({ name: '', message: '' });
    setIsDialogOpen(false);
  };

  return (
    <section id="guestbook" className="py-20 bg-wedding-ivory">
      <div className="container-custom">
        <h2 className="section-title">Guestbook</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-8 text-slate-600">
            Leave a message for the happy couple! Share your well wishes, memories, or advice.
          </p>
          
          <div className="flex justify-center mb-12">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button
                  className={cn(
                    "flex items-center bg-wedding-darkSage text-white font-sans",
                    "px-6 py-3 rounded uppercase tracking-wider text-sm",
                    "transition-all hover:bg-wedding-gold"
                  )}
                >
                  <MessageSquare size={18} className="mr-2" />
                  Sign the Guestbook
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-center mb-4">Sign our Guestbook</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newEntry.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                      placeholder="John & Jane Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={newEntry.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                      placeholder="Share your wishes or a special memory..."
                    />
                  </div>
                  
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className={cn(
                        "flex items-center bg-wedding-darkSage text-white font-sans",
                        "px-6 py-2 rounded uppercase tracking-wider text-sm",
                        "transition-all hover:bg-wedding-gold"
                      )}
                    >
                      <Heart size={16} className="mr-2" />
                      Sign
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-wedding-blush/30">
            <div className="flex items-center mb-6">
              <Book className="text-wedding-gold mr-3" size={24} />
              <h3 className="font-serif text-2xl">Guest Messages</h3>
            </div>
            
            <div className="space-y-6">
              {entries.length === 0 ? (
                <p className="text-center text-slate-500 italic py-8">
                  Be the first to sign our guestbook!
                </p>
              ) : (
                entries.map(entry => (
                  <div key={entry.id} className="border-b border-wedding-blush/20 pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-serif text-lg">{entry.name}</h4>
                      <span className="text-sm text-slate-500">{entry.date}</span>
                    </div>
                    <p className="text-slate-600">{entry.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;

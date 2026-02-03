// import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from 'lucide-react';
// import { cn } from '@/lib/utils';

// export const ContactSection = () => {
//   return <section id="contact" className="py-24 px-4 relative bg-secondary/30">

//     <div className="container mx-auto max-w-5xl">
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In<span className="text-primary"> Touch</span></h2>

//       <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//         Have a project in mind or want to collaborate? feel free to reach out.
//         I'm always open to discussing new opportunities.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         <div className="space-y-8">
//           <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
//           <div className="space-y-6 justify-center">
//             <div className="flex items-start space-x-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <Mail className='h-6 w-6 text-primary' />
//               </div>
//               <div >
//                 <h4 className='font-medium'>Email</h4>
//                 <a href="mailto:hello@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>hello@gamil.com</a>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <Phone className='h-6 w-6 text-primary' />
//               </div>
//               <div >
//                 <h4 className='font-medium'>phone</h4>
//                 <a href="tel: +120394756" className='text-muted-foreground hover:text-primary transition-colors'>+91 1234xxxx90</a>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <MapPin className='h-6 w-6 text-primary' />
//               </div>
//               <div >
//                 <h4 className='font-medium'>Location</h4>
//                 <a className='text-muted-foreground hover:text-primary transition-colors'>India, Delhi</a>
//               </div>
//             </div>
//           </div>
//           <div className='pt-8'>
//             <h4 className='font-medium, mb-4'>Contact With Me</h4>
//             <div className='flex space-x-4 justify-center'>
//               <a href="#" target='_blank'>
//                 <Linkedin />
//               </a>
//               <a href="#" target='_blank'>
//                 <Twitter />
//               </a>
//               <a href="#" target='_blank'>
//                 <Instagram />
//               </a>
//               <a href="#" target='_blank'>
//                 <Twitch />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className='bg-card p-8 rounded-lg shadow-xs'>
//           <h3 className='text-2xl font-semibolt
//            mb-6'>Send a Message</h3>
//           <form action="" className='space-y-6'>
//             <div>
//               <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
//               <input type="text" id='name' name='name'
//                 required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
//                 placeholder='Trail portfolio...' />
//             </div>

//             <div>
//               <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
//               <input type="email" id='email' name='email'
//                 required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
//                 placeholder='orderme@gmail.com' />
//             </div>

//             <div>
//               <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
//               <textarea id='message' name='message'
//                 required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
//                 placeholder='please type i have an order for you' />
//             </div>
//             <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2",

//             )}>
//               Send Message
//               <Send size={16} />
//             </button>

//           </form>
//         </div>
//       </div>
//     </div>
//   </section>
// }

import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Get In <span className="text-primary drop-shadow-lg">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'm excited to discuss new opportunities and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12 lg:sticky lg:top-24">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                📧 Contact Info
              </h3>
              <p className="text-lg text-muted-foreground">💬 Let's chat – email, call, or socials</p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <a href="mailto:hello@sumit.com" className="group flex items-start gap-4 p-6 rounded-2xl bg-card hover:bg-accent hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-border hover:border-primary/50">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex-none">
                  <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground group-hover:text-primary">Email</h4>
                  <p className="text-muted-foreground font-semibold">hello@sumit.com</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+911234567890" className="group flex items-start gap-4 p-6 rounded-2xl bg-card hover:bg-accent hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-border hover:border-primary/50">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex-none">
                  <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground group-hover:text-primary">Phone</h4>
                  <p className="text-muted-foreground font-semibold">+91 12345 67890</p>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-start gap-4 p-6 rounded-2xl bg-card hover:bg-accent hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-border hover:border-primary/50 cursor-pointer">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex-none">
                  <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground group-hover:text-primary">Location</h4>
                  <p className="text-muted-foreground font-semibold">Delhi, India 🇮🇳</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-12 border-t border-border">
              <h4 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">🌐 Connect Online</h4>
              <div className="grid grid-cols-4 gap-4">
                <a href="#" target="_blank" className="group p-6 rounded-2xl bg-card hover:bg-primary/10 hover:shadow-xl hover:scale-105 hover:border-primary/50 border border-border transition-all duration-500 flex-none flex items-center justify-center aspect-square">
                  <Linkedin className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" target="_blank" className="group p-6 rounded-2xl bg-card hover:bg-primary/10 hover:shadow-xl hover:scale-105 hover:border-primary/50 border border-border transition-all duration-500 flex-none flex items-center justify-center aspect-square">
                  <Twitter className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" target="_blank" className="group p-6 rounded-2xl bg-card hover:bg-primary/10 hover:shadow-xl hover:scale-105 hover:border-primary/50 border border-border transition-all duration-500 flex-none flex items-center justify-center aspect-square">
                  <Instagram className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" target="_blank" className="group p-6 rounded-2xl bg-card hover:bg-primary/10 hover:shadow-xl hover:scale-105 hover:border-primary/50 border border-border transition-all duration-500 flex-none flex items-center justify-center aspect-square">
                  <Linkedin className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-border/50 hover:shadow-primary/10 hover:shadow-2xl transition-all duration-700">
            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex-none flex items-center justify-center p-3">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Send Message</h3>
                <p className="text-muted-foreground text-lg font-medium">I'll respond within 24 hours</p>
              </div>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                 <label htmlFor="name" className="text-lg font-bold text-foreground inline-flex items-center gap-2">
                    👤 Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full h-16 px-6 py-4 rounded-2xl border-2 border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-primary/50 text-lg placeholder:text-muted-foreground/70 font-semibold"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-3">
                 <label htmlFor="name" className="text-lg font-bold text-foreground inline-flex items-center gap-2">
                    ✉️ Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full h-16 px-6 py-4 rounded-2xl border-2 border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-primary/50 text-lg placeholder:text-muted-foreground/70 font-semibold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
               <label htmlFor="name" className="text-lg font-bold text-foreground inline-flex items-center gap-2">
                  💬 Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-6 py-6 rounded-2xl border-2 border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 focus:ring-offset-2 resize-vertical transition-all duration-500 shadow-xl hover:shadow-2xl hover:border-primary/50 min-h-36 text-lg placeholder:text-muted-foreground/70 font-semibold"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button group w-full h-20 rounded-2xl text-xl font-black flex items-center justify-center gap-3 shadow-2xl hover:shadow-primary/30 hover:shadow-3xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 border-2 border-transparent bg-primary hover:bg-primary/90 uppercase tracking-wider",
                  "focus:outline-none focus:ring-4 focus:ring-primary/30 focus:ring-offset-2"
                )}
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

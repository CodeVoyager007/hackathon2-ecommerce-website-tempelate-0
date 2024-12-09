import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-blog-bg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          {/* Blog Icon */}
          <div className="mb-4">
            <Image
              src="/icon.png" // Place `icon.png` in the `public` folder
              alt="Blog Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold">Blog</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; Blog
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Blog Posts */}
            <div className="md:col-span-3 space-y-6">
              {/* Blog Post 1 */}
              <div>
                <Image
                  src="/contact.png" // Replace with the correct path or URL
                  alt="Going On"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">
                  Going all-in with millennial design
                </h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam...
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Blog Post 2 */}
              <div className="mt-12">
                <Image
                  src="/image/blog2.jpeg"
                  alt="Exploring New Ways of Decorating"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">
                  Exploring New Ways of Decorating
                </h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam...
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Blog Post 3 */}
              <div className="mt-12">
                <Image
                  src="/image/blog3.jpeg"
                  alt="Handmade Pieces"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">
                  Handmade Pieces That Took Time to Make
                </h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam...
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
              {[
                { title: 'Going all-in with millennial design', image: '/image/b1.png' },
                { title: 'Exploring new ways of decorating', image: '/image/b2.png' },
                { title: 'Handmade pieces that took time', image: '/image/b3.png' },
                { title: 'Modern home in Milan', image: '/image/b4.png' },
                { title: 'Colorful office redesign', image: '/image/b5.png' },
              ].map((post, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                  <div>
                    <h2 className="text-black font-bold">{post.title}</h2>
                    <p className="text-gray-600 text-sm">03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Free Delivery', text: 'For all orders over $50.' },
            { title: '90 Days Return', text: 'If the product has an issue.' },
            { title: 'Secure Payments', text: '100% secure payments.' },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <h2 className="text-black font-bold text-3xl">{feature.title}</h2>
              <p className="text-lg text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

// Replace these placeholder URLs with your own files in public/photos/.
export const photos = {
 portrait:'https://res.cloudinary.com/ddt557yb0/image/upload/v1795448473/IMG_6548_2_etyvvg.jpg',
 portraitAlternate:'https://res.cloudinary.com/ddt557yb0/image/upload/f_jpg,q_auto,w_1000/v1795448535/IMG_5981_mzv1wv.heic',
 about:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=85',
 contact:'https://res.cloudinary.com/dcmj7quyv/image/upload/v1777642331/copy_of_img_8052_ippjuv_58d4aa.jpg',
};
export const workPhotos: Record<string, string> = {
 myriad: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795483802/3_czmw7u.png',
 nabu: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795483803/2_pm934i.png',
 biyaheable: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795483802/1_gtnqzu.png',
};

// Project samples in display order.
export const projectPhotos: Record<string, { src: string; caption: string }[]> = {
 nabu: [
  { src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477824/nabu_u2outm.png', caption: 'Nabu — home' },
  { src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477814/features_jkjeii.png', caption: 'Nabu — features' },
  { src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477829/timeline_hbrapr.png', caption: 'Nabu — timeline' },
  { src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477812/expo_jtfkr9.png', caption: 'Nabu — expo' },
  { src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477821/nabu_contact_yy0bgh.png', caption: 'Nabu — contact' },
 ],
 myriad: [
  { src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477817/home_hntdmm.png', caption: 'Myriad — home' },
  { src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477819/photographers_x8or2c.png', caption: 'Myriad — photographers' },
  { src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477826/service_xwzp8j.png', caption: 'Myriad — services' },
  { src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477808/contact_n8i5kv.png', caption: 'Myriad — contact' },
 ],
 biyaheable: [{ src: 'https://res.cloudinary.com/ddt557yb0/image/upload/v1795477798/byahe_gkctvr.png', caption: 'Biyaheable — project sample' }],
};

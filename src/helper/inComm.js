const inComm = {
  array: (length: number) => (new Array(length).fill()),

  img: (width: number, height: number): string => (`https://images.unsplash.com/random/${width}x${height}`),

  imgName: (name: string): string => (`https://ui-avatars.com/api/?name=${name.split(' ').join('+')}`),

  random: (min: number, max: number): number => (Math.round(Math.random() * (max - min) + min)),
}

export default inComm

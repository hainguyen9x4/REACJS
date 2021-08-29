export const fullName = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}
export class Book{
    constructor(bookName, pageSize){
        this.bookName = bookName;
        this.pageSize = pageSize;
    }
}
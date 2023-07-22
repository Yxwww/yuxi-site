import NextImage from 'next/image';

/*
 * Use next image for custom image Tag
 */
export function Image({ src, alt, title, width, height, ...rest }) {
  // using <span> here to work with the <p> wrapper introduced by markdoc
  return (
    <span className="block relative w-full sm:w-11/12" style={{ height }}>
      <NextImage
        src={src}
        className="object-contain my-0"
        alt={`landing image - capybara on books!`}
        style={{ marginTop: 0, marginBottom: 0 }}
        fill
      />
    </span>
  );
}

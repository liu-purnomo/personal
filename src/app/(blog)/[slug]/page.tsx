type DetailPostPageProps = { params: { slug: string[] } };

export default function DetailBlog(props: DetailPostPageProps) {
  const { params } = props;
  console.log(params);
  return (
    <div>
      Blog Detail
      {params.slug}
    </div>
  );
}

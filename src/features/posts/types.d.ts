export type Tag = {
  id?: number;
  name: string;
};
export type SelectTag = {
  selected: boolean;
  tag: Tag;
}

export type Post = {
  id?: number;
  uuid?: string;
  title: string;
  content: string;
  created_at?: string;
  thumbnail_link?: string;
  diqus_comment_link?: string;
  tags?: Tag[];
};

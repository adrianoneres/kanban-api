import { BaseEntity } from './base-entity';
import { Content } from './content';
import { List } from './list';
import { Title } from './title';

export interface CardProps {
  title: Title;
  content: Content;
  list: List;
}

export class Card extends BaseEntity {
  private props: CardProps;

  constructor(props: CardProps, id?: string) {
    super(id);
    this.props = props;
  }

  public get title(): Title {
    return this.props.title;
  }

  public set title(title: Title) {
    this.props.title = title;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get list(): List {
    return this.props.list;
  }

  public set list(list: List) {
    this.props.list = list;
  }
}

import {PrimaryColumn, Column} from "../../../src/columns";
import {Table} from "../../../src/tables";
import {Post} from "./Post";
import {ManyToManyInverse} from "../../../src/decorator/relations/ManyToManyInverse";

@Table("sample7_post_category")
export class PostCategory {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    name: string;

    @ManyToManyInverse(type => Post, post => post.categories, {
        cascadeInsert: true,
        cascadeUpdate: true,
        cascadeRemove: true
    })
    posts: Post[] = [];

}
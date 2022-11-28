import Link from 'next/link';
import styles from '../../styles/UserPostItem.module.css';

// post item for user page

export default function UsersPostItem({ posted }) {

    let postContent;  // post type
    if (posted.post_text == '') {
        postContent = "image"
    };
    if (posted.post_pic == '') {
        postContent = "text"
    };
    

    return (
        <div className={styles.container}>
            <Link href={'/posts[id]'} as={`/posts/${posted.post_id}`}>
                <div className={styles.postContent}>
                    {/* the post can either be a text format or just a plain image  */}
                    {postContent == "image" ?
                        <div>
                            <img className={styles.postImg} src={posted.post_pic} />
                        </div> :
                        <div>
                            <p className={styles.postText}>{posted.post_text}</p>
                        </div>
                    }
                </div>
            </Link>
        </div>
    );
};
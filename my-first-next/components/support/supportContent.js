import * as React from 'react';
import Search from './search';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';
import PaginationBtn from '../../components/paginationBtn';
import Link from 'next/link';

export default function SupportContent({ pageName, allPostsData }) {

    return (
        <div>
            <div>
                <h1>{pageName} 페이지입니다.</h1>
                <Search />
            </div>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>전체 {pageName}</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/support/${pageName}/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            <div>
                <PaginationBtn />
            </div>
        </div>
    );
}
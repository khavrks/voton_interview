import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import styles from './css/AdminLayout.module.css';
import { BlogDetailsAuthor } from '../components/blogs/blog-details/BlogDetailsAuthor';

const AdminLayout = ({ children, user }) => {
  return (
    <div className={styles.adminLayout}>
      <Container fluid className="w-100 m-auto justify-center">
        <Row>
          <Col xs={2} id="sidebar" className={styles.sidebar}>
          <BlogDetailsAuthor author={user} />
            <Nav className="flex-column">
              <Nav.Link href="/staff/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/staff/blogs">Blogs</Nav.Link>
              <Nav.Link disabled href="/staff/settings">Settings</Nav.Link>
              <Nav.Link href="/staff/testbuyfunc">Buy Tokens</Nav.Link>
            </Nav>
          </Col>
          <Col xs={10} id="main-content">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLayout;

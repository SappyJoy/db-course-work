FROM airhacks/glassfish
COPY ./target/db-course.war ${DEPLOYMENT_DIR}

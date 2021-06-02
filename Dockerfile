FROM nginx:latest


RUN mkdir -p /usr/share/man/man1
RUN apt-get update -y && apt-get install -y \
    unzip \
    curl \
    default-jre


WORKDIR /tmp


RUN curl http://cdn.sencha.com/cmd/7.0.0.40/no-jre/SenchaCmd-7.0.0.40-linux-amd64.sh.zip -o SenchaCmd-7.0.0.40-linux-amd64.sh.zip
RUN unzip SenchaCmd-7.0.0.40-linux-amd64.sh.zip

COPY app/desktop/conf/senchacmd.varfile /tmp/senchacmd.varfile


RUN /tmp/`find SenchaCmd*.sh` -q -varfile /tmp/senchacmd.varfile -dir "/opt/sencha"
RUN ln -s /opt/sencha/sencha /usr/local/bin/sencha

COPY . /opt/project
WORKDIR /opt/project

ENTRYPOINT ["docker-entrypoint.sh"]

RUN sencha app build production

RUN cp -r build/production/project/* /usr/share/nginx/html


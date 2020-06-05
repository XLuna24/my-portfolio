// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.gson.Gson;
import com.google.sps.data.Comment;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
    private int numEntries = 5;
    
    @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      Query query = new Query("Task").addSort("timestamp", SortDirection.DESCENDING);

      DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
      PreparedQuery prep = datastore.prepare(query);
      
      List<Comment> comments = new ArrayList<>();
      for (Entity entity : prep.asIterable(FetchOptions.Builder.withLimit(numEntries))) {
          String name = (String) entity.getProperty("name");
          String comment = (String) entity.getProperty("comment");
          long id = entity.getKey().getId();
          long timestamp = (long) entity.getProperty("timestamp");

          Comment posts = new Comment(id, name, comment, timestamp);
          comments.add(posts);
        }

      Gson gson = new Gson();

      response.setContentType("application/json;");
      response.getWriter().println(gson.toJson(comments));
  }
    @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = getParameter(request,"u-name","");
        String comment = getParameter(request, "text-input", "");
        long timestamp = System.currentTimeMillis();

        numEntries = Integer.parseInt(getParameter(request, "num-comments", "5"));

        Entity post = new Entity("Task");
        post.setProperty("name", name);
        post.setProperty("comment", comment);
        post.setProperty("timestamp", timestamp);

        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        datastore.put(post);

        response.sendRedirect("/blog.html");
    }

  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }
}
